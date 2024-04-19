"use client";
import Menu from "@/components/home/Menu";
import MenuSection from "@/components/home/MenuSection";
import OnlineUserList from "@/components/home/OnlineUserList";
import SocketService from "@/services/sockets/socket";
import { useEffect } from "react";

export default function MenuPage() {
  return (
    <div className="flex flex-row justify-center items-center">
      <MenuSection>
        <Menu />
      </MenuSection>
      <OnlineUserList />
    </div>
  );
}
