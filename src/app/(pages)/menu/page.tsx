"use client";
import GlobalChat from "@/components/chat/GlobalChat";
import Menu from "@/components/home/Menu";
import MenuSection from "@/components/home/MenuSection";
import OnlineUserList from "@/components/home/OnlineUserList";

export default function MenuPage() {
  return (
    <div className="flex flex-row justify-center items-center">
      <MenuSection>
        <Menu />
      </MenuSection>
      <OnlineUserList />
      <GlobalChat />
    </div>
  );
}
