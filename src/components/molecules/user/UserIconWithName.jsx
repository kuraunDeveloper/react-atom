import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from 'recoil';
import { userState } from '../../../store/userState';

export const UserIconWithName = (props) => {
    // const context = useContext(UserContext);
    const userInfo = useRecoilValue(userState);
    const { image, name } = props;
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    return (
        <SContainer>
            <SIcon src={image} alt="profile" />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`;

const SIcon = styled.img`
    border-radius: 50%;
    height: 160px;
    width: 160px;
`;

const SName = styled.p`
    font-size: 18px;
    margin: 0;
    color: #40514e;
    font-weight: bold;
`;

const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`;