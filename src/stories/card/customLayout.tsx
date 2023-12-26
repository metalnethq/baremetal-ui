import React from "react";
import Card, { Heading, Body, Footer } from "../../lib/components/card";
import Button from "../../lib/components/button";
import Text from "../../lib/components/text";
import "../../index.css";

export function CustomLayout() {
  return (
    <>
      <div className="mb-10 text-blue-800 bg-blue-50 text-sm p-2 rounded">
        Please use the code from the{" "}
        <a
          className="underline"
          href="https://metalnethq.github.io/baremetal/?path=/docs/card-custom-layout--docs"
        >
          Docs
        </a>
        .
      </div>
      <Card>
        <Heading className="flex justify-between items-center">
          <Text el="h3" intent={"secondary"} weight="light">
            Title goes here
          </Text>
          <Text className="text-blue-600 italic underline text-xs" el="span">
            <a href="https://pixabay.com/photos/dog-puppy-golden-retriever-pet-8272860/">
              Credits: emiliaxd
            </a>
          </Text>
        </Heading>
        <Body el="div" className="flex flex-col items-center">
          <img
            width={400}
            src="https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_1280.jpg"
            alt="Image from pixabay"
          />
        </Body>
        <Footer
          actions={[
            <Text weight="extraLight" className="text-sm text-gray-500">
              Tommy
            </Text>,
            <Text weight="extraLight" className="text-sm text-gray-500">
              3 Months
            </Text>,
            <Text weight="extraLight" className="text-sm text-gray-500">
              Goldie
            </Text>,
          ]}
          wrapperClassName="justify-evenly"
        >
          <div className="flex justify-end border-t p-3">
            <Button className="mr-3" size="sm">
              Pet Him
            </Button>
            <Button intent="secondary" size="sm">
              Feed Him
            </Button>
          </div>
        </Footer>
      </Card>
    </>
  );
}
