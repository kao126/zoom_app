import { FormCard } from '../components/form-card';

export default function New() {
  return (
    <main className="h-dvh flex justify-center items-center">
      <FormCard
        title="New Schedule"
        description="create schedule on Zoom Webinar"
        action="Create"
      />
    </main>
  );
}
