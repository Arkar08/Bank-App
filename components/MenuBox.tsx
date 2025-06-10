import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { Pressable } from "react-native";
import MenuText from "./MenuText";
import MenuView from "./MenuView";

interface MenuBoxProps{
    icon:string,
    text:string
    changeRoute:()=>void;
}


const MenuBox = ({icon,text,changeRoute}:MenuBoxProps) => {
  return (
    <Pressable onPress={changeRoute}>
      <MenuView>
        <FontAwesome6 name={icon} size={24} color="black" />
      </MenuView>
      <MenuText menu={text} />
    </Pressable>
  );
};

export default MenuBox;
