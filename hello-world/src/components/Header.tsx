type Props = {
    name: string;
    age: number;
}

export const Header = ({name, age}: Props) => {
    return (
        <header>
            <h1>Algum título interessante. -- Olá {name} {age} anos, tudo bem?</h1>
        </header>
    );
}