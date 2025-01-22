export default function UserProfile({ params }: any) {
  return (
    <div className="bg-black text-red-50 flex items-center justify-center min-h-screen flex-col">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl text-white mt-4">
        Profile page{" "}
        <span className=" p-2 rounded bg-orange-400 text-black  ml-2 ">
          {params.id}
        </span>
      </p>
    </div>
  );
}
