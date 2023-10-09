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
import { ChangeEvent, useEffect, useState } from "react";
import { ItemInterface, UserProfile } from "@/common.types";
import { addItem } from "@/lib/actions/item.actions";
import { setMyListItem } from "@/lib/actions/mylist.action";
import { SheetClose, SheetFooter } from "../ui/sheet";
import { setFriendItem } from "@/lib/actions/friend.action";
import { uploadItemThumbnail } from "@/lib/actions/image.action";
import { searchUser } from "@/lib/actions/user.actions";

const formSchema = z.object({
  userId: z.string().nonempty(),
});

const SearchForm = ({}: {}) => {
  const [resultUser, setResultUser] = useState<UserProfile[] | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await searchUser(values.userId);
    setResultUser(result!);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Input placeholder={""} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="w-full self-center mt-5">
                Search
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </Form>
      <text>
        Result
      </text>
    </div>
  );
};

export default SearchForm;
