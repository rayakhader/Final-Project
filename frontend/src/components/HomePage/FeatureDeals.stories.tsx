import { Meta, StoryObj } from "@storybook/react-webpack5";
import FeatureDeals from "./FeatureDeals";
import { FeatureDealData } from "./types";


const mockDeals: FeatureDealData[] = [
    {
        hotelId: 1,
        cityName: 'Ramallah',
        hotelName: 'Bolivard',
        originalRoomPrice: 200,
        discount: 200,
        finalPrice: 200,
        hotelStarRating: 5,
        title: 'one',
        description: 'one',
        roomPhotoUrl: 'one'
    },
    {
        hotelId: 2,
        cityName: 'Nablus',
        hotelName: 'Park',
        originalRoomPrice: 200,
        discount: 200,
        finalPrice: 200,
        hotelStarRating: 5,
        title: 'one',
        description: 'one',
        roomPhotoUrl: 'one'
    },
];

const meta: Meta<typeof FeatureDeals> = {
    title: 'Components/FeatureDeals',
    component: FeatureDeals,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof FeatureDeals>;

export const Deafult: Story = {
    args: {
        list: mockDeals
    }
}