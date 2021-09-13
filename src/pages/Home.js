import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfoAction } from "Redux/actions/userInfoAction";
import { Container, Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Home = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userInfo);
    const { userInfos } = userInfo;

    useEffect(() => {
        dispatch(userInfoAction());
    }, [dispatch]);

    return (
        <MainContainer>
            <Container>
                <h1>ini home</h1>
                <Row>
                    {userInfos.results.map((data, i) => (
                        <Col key={i} xs={12} sm={10} md={8} lg={6} xl={3}>
                            <Card>
                                <Card.Header>
                                    <Card.Img src={data.picture.large} />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        {data.name.first} {data.name.last}
                                    </Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Text>{data.phone}</Card.Text>
                                    <Card.Text>{data.email}</Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </MainContainer>
    );
};

export default Home;

const MainContainer = styled.div`
    padding: 5rem 0;
`;
