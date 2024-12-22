import styled from "styled-components";

export const UserIconWithName = (props) => {
    const { image, name } = props;
    return (
        <SContainer>
            <SIcon src={image} alt="profile" />
            <SName>{name}</SName>
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