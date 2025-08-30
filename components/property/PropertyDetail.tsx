import { PropertyProps } from "@/interfaces";

interface props {
    property: PropertyProps;
}

export const PropertyCard = ({ property }: props) => {
    return (
        <div>
            <p>{property.name}</p>
        </div>
    );
};
