// The build fails without dynamic rendering.
export const dynamic = "force-dynamic";

const Page = () => {
	throw new Error("oh no");
};

export default Page;
