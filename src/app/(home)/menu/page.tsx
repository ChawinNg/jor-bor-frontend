'use client'
import Menu from "@/components/home/Menu";
import MenuSection from "@/components/home/MenuSection";
import SocketService from "@/services/sockets/socket";
import { useEffect } from "react";

export default function MenuPage() {
  const connectSocket = async () => {
    const socket = await SocketService.connect("http://localhost:8000").catch((err) => {console.log("Error: ", err)})
  }

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <MenuSection>
      <Menu />
    </MenuSection>
  );
}
