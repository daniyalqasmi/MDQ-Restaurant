import MenuPage from "./menupage";

export default function Menu({ params }: { params: { menu: string } }) {
    console.log(params.menu)


    return (
        <div className="mt-[100px] mb-[100px] ">
            <MenuPage params={params}/>
        </div>
    )
}