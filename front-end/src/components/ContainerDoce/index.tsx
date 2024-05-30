import { docesProps } from "@/types/doceProps";
import { conversorDinheiro } from "@/utils/conversorDinheiro";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

type containerDoce = Omit<docesProps, "id" | "slug">;

const iconProps = {
  size: "35",
  color: "rgb(234 179 8)"
};

export default function ContainerDoce({
  categoria,
  foto,
  preco,
  titulo,
  peso,
  serve
}: containerDoce) {
  return (
    <div className="border-2 border-solid border-yellow-500 p-2 rounded-md bg-slate-100">
      <div className="relative w-[200px] h-[200px]">
        <Image src={foto} alt={titulo} fill />
      </div>
      <h1 className="">{titulo}</h1>
      <p className="mt-2 mb-2">{ conversorDinheiro(preco) }</p>
      <footer>
        <div className="flex justify-between">
          <p className="capitalize">{categoria}</p>
          <p>{peso ? peso : "100"}g</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p>Serve {serve} pessoa{serve > 1 ? "s" : ""}</p>
          <FaShoppingCart {...iconProps} className="cursor-pointer"/>
        </div>
      </footer>
    </div>
  );
}
