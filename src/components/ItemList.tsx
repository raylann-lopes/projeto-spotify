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
}

const ItemList: React.FC<ItemListProps> = ({ title, items, itemsArray }) => {
  return (
    <>
      <div className="flex flex-col gap-2.5 p-0">
        <div className="flex items-center justify-between leading-normal">
          <h2 className="text-2xl">{title} Populares</h2>
          <a className="hover:underline" href="/">
            Mostrar tudo
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-9">
          {itemsArray
            .filter((currentValue, index) => index < items.length)
            .map((currentIObject, index) => (
              <SingleItem {...currentIObject} key={`${title}-${index}`} />
            ))}
        </div>
      </div>
    </>
  );
};
export default ItemList;
