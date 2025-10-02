import Text from "../Typography/Text/Text"

type LinkListProps = {
    items: Record<string, string>
}
export default function LinkList({ items }: LinkListProps) {
    return (
        <ul className="flex flex-col md:flex-row items-center gap-5">
            {
                Object.keys(items).length > 0 && Object.keys(items).map((item) =>
                    <li key={item} className="border-b-2 border-b-sky-900 max-w-[150px] text-center">
                        <a href={items[item]}>
                            <Text className="text-2xl text-sky-400 hover:text-sky-900">
                                {item}
                            </Text>
                        </a>
                    </li>
                )
            }

        </ul>
    )
}