import CoverOne from '../images/cover/cover-02.jpg';
import anonymousUser from '../images/user/another-pick.jpg';
const Profile = () => {
  return (
    <>

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div style={{ backgroundImage: `url(${anonymousUser})` }} className="bg-cover bg-center relative z-30 mx-auto -mt-24 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              Pedro Silva
            </h3>
            <p className="font-medium mb-5">Admin</p>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>
              <p className="mt-4.5">
                Something beautiful will be here, we just dont know yet what.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
