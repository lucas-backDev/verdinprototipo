import { UnitBanner } from "./unit-banner"

type Props = {
  title: string;
  description: string;
}

export const Unit = ({
  title,
  description,
}: Props) => {
  return (
    <>
      <UnitBanner title="Unidade 1" description="Conscientização" />
    </>
  )
}