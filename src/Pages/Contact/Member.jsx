const Member = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-9 pb-16  justify-center item-center  gap-10">
      <div className="card  bg-base-100 shadow-xl">
      <div className="avatar">
  <div className="mx-auto w-24 rounded-full">
    <img src="https://i.ibb.co/Yjx0M13/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" />
  </div>
</div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-amber-500 font-bold ">Alison Johnson</h2>
          <p>Alison is a creative and data-driven marketing professional with a passion for branding and storytelling. He brings innovative strategies to the table, transforming ideas into successful marketing campaigns.</p>
          
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
      <div className="avatar">
  <div className="mx-auto w-24 rounded-full">
    <img src="https://i.ibb.co/f8c7ZvV/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png" />
  </div>
</div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-amber-500 font-bold">David Smith</h2>
          <p>David is a seasoned software engineer known for his problem-solving skills and expertise in coding. With a knack for turning complex concepts into elegant solutions, hes a valuable asset to the development team.</p>
          
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
      <div className="avatar">
  <div className="mx-auto w-24 rounded-full">
    <img src="https://i.ibb.co/BB51Xsg/images.png" />
  </div>
</div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-amber-500 font-bold">Linda Martinez</h2>
          <p>Linda is a people-oriented HR specialist who fosters a positive work environment. Her dedication to employee well-being and professional development has made her a trusted resource within the organization.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Member;
