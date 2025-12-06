import RelatedList from './RelatedList';

interface RelatedHotelsProps {
	cityId: number;
}

const RelatedHotels = ({ cityId }: RelatedHotelsProps) => {
	return (
		<div className="space-y-6">
			<h2 className="text-lg font-semibold">Related Hotels</h2>
			<RelatedList cityId={cityId} />
		</div>
	);
};

export default RelatedHotels;
