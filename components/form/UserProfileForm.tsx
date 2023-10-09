"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { setUser } from "@/lib/actions/user.actions";
import { EmailAddress } from "@clerk/nextjs/server";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { uploadAvatarImage } from "@/lib/actions/image.action";
import { addMyList } from "@/lib/actions/mylist.action";
import { initMyList } from "@/constants";

type props = {
  id: string;
  name: string;
  displayName: string;
  email: EmailAddress;
  avatarUrl: string;
};

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must be at least 2 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  displayName: z
    .string()
    .min(2, { message: "name must be at least 2 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  profile_photo: z.string().url().nonempty(),
});

const UserProfileForm = ({ userData }: { userData: props }) => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userData.name,
      displayName: userData.displayName,
      profile_photo: userData.avatarUrl,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const myListId = userData.id + Date.now().toString();
    const url = files[0]
      ? await uploadAvatarImage(files[0], userData.id)
      : userData.avatarUrl;
    await Promise.all([
      setUser({
        id: userData.id,
        name: values.name,
        displayName: values.displayName,
        email: userData.email.emailAddress,
        avatarUrl: url,
        onboarded: true,
      }),
      addMyList(userData.id, {
        id: myListId,
        name: initMyList.name,
        description: initMyList.description,
        thumbnailUrl: initMyList.thumbnailUrl,
        createAt: Date.now().toString(),
        createBy: userData.id,
      }),
    ]);
    router.push("/");
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile_icon"
                    width={96}
                    height={96}
                    priority
                    className="rounded-full object-contain hover:cursor-pointer"
                  />
                ) : (
                  <Image
                    src={userData.avatarUrl}
                    alt="profile_icon"
                    width={24}
                    height={24}
                    className="object-contain hover:cursor-pointer"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-gray-200 hover:cursor-pointer">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Add profile photo"
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
                <Input placeholder={userData.name} {...field} />
              </FormControl>
              <FormDescription>
                This is not seen by other users.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder={userData.displayName} {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full self-center">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default UserProfileForm;
