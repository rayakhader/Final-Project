import { Meta, StoryObj } from "@storybook/react-webpack5";
import { MemoryRouter } from "react-router-dom";
import Login from "../../../pages/Login";

const meta: Meta<typeof Login> = {
    title: 'Components/Login',
    component: Login,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof Login>;

export const Deafult: Story = {
    render: () => <Login />
}