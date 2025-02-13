import SingleItem from "./SingleItem";

interface ItemListProps {
  title: string;
  items: any[];
}

const ItemList: React.FC<ItemListProps> = ({ title, items }) => {
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
          {items.length === 5 ? (
            <>
              <SingleItem />
              <SingleItem />
              <SingleItem />
              <SingleItem />
              <SingleItem />
            </>
          ) : (
            <>
              <SingleItem />
              <SingleItem />
              <SingleItem />
              <SingleItem />
              <SingleItem />
              <SingleItem />
              <SingleItem />
              <SingleItem />
              <SingleItem />
              <SingleItem />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ItemList;
