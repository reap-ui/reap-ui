import * as React from "react"
import {
    Tabs, ListGroup, Row, Col 
} from "reap-ui"

export default () => {
    const [activeKey, updateTab] = React.useState("home")
    const factory = key => () => {
        if (key !== activeKey) {
            updateTab(key)
        }
    } 

    return (
        <>
            <Row>
                <Col span={4}>
                    <ListGroup>
                        <ListGroup.Item action active={activeKey === "home"} onClick={factory("home")}>Home</ListGroup.Item>
                        <ListGroup.Item action active={activeKey === "profile"} onClick={factory("profile")}>Profile</ListGroup.Item>
                        <ListGroup.Item action active={activeKey === "messages"} onClick={factory("messages")}>Messages</ListGroup.Item>
                        <ListGroup.Item action active={activeKey === "settings"} onClick={factory("settings")}>Settings</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Tabs activeKey={activeKey}>
                        <Tabs.TabPane key="home">
                            Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.
                        </Tabs.TabPane>
                        <Tabs.TabPane key="profile">
                            Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.
                        </Tabs.TabPane>
                        <Tabs.TabPane key="messages">
                            Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.
                        </Tabs.TabPane>
                        <Tabs.TabPane key="settings">
                            Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure.
                        </Tabs.TabPane>
                    </Tabs>
                </Col>
            </Row>
        </>
    )
}