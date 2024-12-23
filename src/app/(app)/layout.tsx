import BackgroundPattern from "@/components/backgroundPattern";
import AppHeader from "@/components/appHeader";
import AppFooter from "@/components/appFooter";
import PetContextProvider from "@/contexts/pet-context-provider";
import { Pet } from "@/lib/types";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/petsoft/api/pets"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch pets data");
  }
  const data: Pet[] = await response.json();
  console.log(data);

  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />
        <PetContextProvider data={data}>{children}</PetContextProvider>
        <AppFooter />
      </div>
    </>
  );
}
