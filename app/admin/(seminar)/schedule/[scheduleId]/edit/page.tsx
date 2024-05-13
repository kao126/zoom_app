import { FormCard } from '../../components/form-card';

export default function Edit({ params }: { params: { seminarId: number } }) {
  return (
    <main className="h-dvh flex justify-center items-center">
      <FormCard
        title="Edit Schedule"
        description="update the Schedule on Zoom Webinar"
        action="Update"
      />
    </main>
  );
}
