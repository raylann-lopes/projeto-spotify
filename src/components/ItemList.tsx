import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";
interface ItemListProps {
  title: string;
  items: any[];
  itemsArray: {
    image: string;
    name: string;
    duration?: string;
    artist?: string;
    audio?: string;
    id: number;
    banner?: string;
  }[];
  path: string;
  idPath: string;
}

const ItemList: React.FC<ItemListProps> = ({
  title,
  items,
  itemsArray,
  path,
  idPath,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2.5 p-0">
        <div className="flex items-center justify-between leading-normal">
          <h2 className="text-2xl">{title} Populares</h2>
          <Link to={path} className="hover:underline">
            Mostrar tudo
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
          {itemsArray
            .filter((currentValue, index) => index < items.length)
            .map((currentObject, index) => (
              <SingleItem
                idPath={idPath}
                {...currentObject}
                key={`${title}-${index}`}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default ItemList;
