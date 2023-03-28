import { Button, Flex, Image, ButtonProps, rem } from "@mantine/core";
import React from "react";

const ButtonText: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="subtle"
      styles={(theme) => ({
        root: {
          color: "#FFFFFF",
          backgroundColor: "props.color",
          border: 0,
          "&:not([data-disabled])": theme.fn.hover({
            backgroundColor: "unset",
            color: "#FF963C",
          }),
        },
      })}
    >
      Settings
    </Button>
  );
};

export const Header: React.FC<unknown> = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 160px",
      }}
    >
      <Image height={64} width={144} src="./icons/logo.svg" />
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <ButtonText leftIcon={<Image src="./icons/icon_memo.svg" />}>
          Settings
        </ButtonText>
        <ButtonText
          color="primary300"
          leftIcon={<Image src="./icons/icon_challenge.svg" />}
        >
          Settings
        </ButtonText>
        <ButtonText
          color="primary300"
          leftIcon={
            <div
              style={{
                position: "relative",
              }}
            >
              <Image src="./icons/icon_info.svg" />
              <span
                style={{
                  border: "1px solid",
                  borderRadius: "50%",
                  backgroundColor: "#EA6C00",
                  width: 16,
                  position: "absolute",
                  textAlign: "center",
                  top: 0,
                  right: -8,
                }}
              >
                1
              </span>
            </div>
          }
        >
          Settings
        </ButtonText>
      </Flex>
    </div>
  );
};
