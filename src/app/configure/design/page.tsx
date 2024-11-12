import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // Typing as a Promise
}

const Page = async ({ searchParams }: PageProps) => {
  try {
    const resolvedSearchParams = await searchParams; // Resolve the Promise
    const { id } = resolvedSearchParams;

    if (!id || typeof id !== "string") {
      return notFound();
    }

    const configuration = await db.configuration.findUnique({
      where: { id },
    });

    if (!configuration) {
      return notFound();
    }

    const { imageUrl, width, height } = configuration;

    return (
      <DesignConfigurator
        configId={configuration.id}
        imageDimensions={{ width, height }}
        imageUrl={imageUrl}
      />
    );
  } catch (error) {
    console.error("Error occurred:", error); // Log the error for debugging
    return notFound(); // Handle the error by returning the notFound response
  }
};

export default Page;
