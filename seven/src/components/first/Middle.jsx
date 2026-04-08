import Square from "./Middle/Square";

export default function Middle() {
    return (
        <>
            <div className="flex gap-12 justify-center">
                <Square /> {/* <Square /> == <Square><Square/> */}
                <Square />
                <Square />
                <Square />
            </div>
            <p className="text-white px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae qui iusto recusandae ratione numquam facilis eum nihil alias deserunt itaque. Quidem quia vitae eveniet natus quis rem dolores consectetur fuga possimus commodi saepe ea alias, perspiciatis ex officiis perferendis sunt nostrum omnis voluptatem quos error repellat corporis. Excepturi praesentium ipsum nisi aut repudiandae dolorem? Aliquam porro adipisci quae! Provident, quam quis maiores earum accusamus repellendus tempore perspiciatis rem culpa necessitatibus? Earum ipsum atque ut dolorum, sequi et sed vel cumque, id natus quis adipisci, modi perspiciatis? Facere architecto sunt cupiditate ipsam quisquam vero laudantium, commodi nisi dicta velit quidem veritatis.</p>
        </>
    );
}