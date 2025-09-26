import Text from "../Typography/Text/Text"

type LinkListProps = {
    items: Record<string, string>
}
export default function LinkList({ items }: LinkListProps) {
    return (
        <ul className="flex flex-col gap-5">
            {
                Object.keys(items).length > 0 && Object.keys(items).map((item) =>
                    <li key={item} className="border-b-2 border-b-emerald-50 max-w-[200px]">
                        <a href={items[item]}>
                            <Text className="text-2xl text-sky-400!">
                                {item}
                            </Text>
                        </a>
                    </li>
                )
            }

        </ul>
    )
}