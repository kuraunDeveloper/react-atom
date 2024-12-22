import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(() => {
    return {
        name: "みや",
        image: "https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        email: 'hogehoge.emai.com',
        phone: '080-1234-5678',
        company: {
            name: 'みやの会社',
        },
        website: 'https://google.com'
    }
});

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    );
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
`;