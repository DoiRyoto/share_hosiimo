"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { ItemInterface } from "@/common.types";
import { addItem } from "@/lib/actions/item.actions";
import { setMyListItem } from "@/lib/actions/mylist.action";
import { SheetClose, SheetFooter } from "../ui/sheet";
import { setFriendItem } from "@/lib/actions/friend.action";
import { uploadItemThumbnail } from "@/lib/actions/image.action";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "name must be at least 1 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  description: z
    .string()
    .min(2, { message: "description must be at least 2 characters." })
    .max(1000, { message: "Maximum 1000 caracters." }),
  profile_photo: z.string().url(),
});

const FriendItemForm = ({
  itemData,
  userId,
  friendId,
}: {
  itemData: ItemInterface;
  userId: string;
  friendId: string;
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: itemData.name,
      description: itemData.description,
      profile_photo: itemData.thumbnailUrl
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const itemId = userId + Date.now().toString();
    const url = files[0]
      ? await uploadItemThumbnail(files[0], itemData.id)
      : itemData.thumbnailUrl;
    const newItemData: ItemInterface = {
      id: itemId,
      name: values.name,
      description: values.description,
      thumbnailUrl: url,
      createAt: Date.now().toString(),
      createBy: userId,
      alreadyBuy: false,
    };
    await Promise.all([
      addItem(userId, newItemData),
      addItem(friendId, newItemData),
      setFriendItem(newItemData, userId, friendId),
    ]);
  }

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
        <FormField
          control={form.control}
          name='profile_photo'
          render={({ field }) => (
            <FormItem className='flex flex-center gap-4'>
              <FormLabel>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt='profile_icon'
                    width={200}
                    height={200}
                    style={{ width: '100%', height: 'auto' }}
                    className='rounded-md object-contain hover:cursor-pointer'
                  />
                ) : (
                  <Image
                    src={itemData.thumbnailUrl}
                    alt='profile_icon'
                    width={200}
                    height={200}
                    style={{ width: '100%', height: 'auto' }}
                    className='object-contain hover:cursor-pointer'
                  />
                )}
              </FormLabel>
              <FormControl className='flex-1 text-gray-200 hover:cursor-pointer'>
                <Input
                  className="hidden"
                  type='file'
                  accept='image/*'
                  placeholder='Add profile photo'
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input placeholder={itemData.name} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Input placeholder={itemData.description} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="w-full self-center mt-5">
                Submit
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </form>
    </Form>
  );
};

export default FriendItemForm;
