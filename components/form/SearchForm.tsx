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
import { useState } from "react";
import {  UserProfile } from "@/common.types";
import { SheetClose, SheetFooter } from "../ui/sheet";
import { searchUser } from "@/lib/actions/user.actions";
import UserList from "../UserList";
import SearchUserList from "../SearchUserList";

const formSchema = z.object({
  userId: z.string().nonempty(),
});

const SearchForm = ({ userId }: { userId: string }) => {
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
    <div className="min-h-[80vh] max-h-[80vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserId</FormLabel>
                <FormControl>
                  <Input placeholder={""} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SheetFooter>
              <Button type="submit" className="w-full self-center mt-5">
                Search
              </Button>
          </SheetFooter>
        </form>
      </Form>
      {resultUser && <SearchUserList userId={userId} userList={resultUser} label="result"/>}
    </div>
  );
};

export default SearchForm;
