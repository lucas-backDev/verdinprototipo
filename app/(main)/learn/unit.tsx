import { UnitBanner } from "./unit-banner"

type Props = {
  title: string;
  description: string;
}

export const Unit = () => {
  return (
    <>
      <UnitBanner title="Unidade 1" description="Conscientização" />
    </>
  )
}