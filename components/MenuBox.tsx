import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { Pressable } from "react-native";
import MenuText from "./MenuText";
import MenuView from "./MenuView";

interface MenuBoxProps{
    icon:string,
    text:string
}


const MenuBox = ({icon,text}:MenuBoxProps) => {
  return (
    <Pressable>
      <MenuView>
        <FontAwesome6 name={icon} size={32} color="black" />
      </MenuView>
      <MenuText menu={text} />
    </Pressable>
  );
};

export default MenuBox;
