import { memo } from "react";
import { ProfileBanner } from "./profile/ProfileBanner";
import { ProfileAvatar } from "./profile/ProfileAvatar";
import { ProfileStatusAvail } from "./profile/ProfileStatusAvail";
import { ProfileInfo } from "./profile/ProfileInfo";
import { ProfileAction } from "./profile/ProfileAction";

const Profile_ = () => {
  return (
    <section className="w-full mt-1 lg:shrink-0">
      <div className="relative mx-auto w-full max-w-375">
        <ProfileBanner />

        <div className="relative mx-auto -mt-10 max-w-[94%] md:-mt-12 lg:-mt-18 lg:max-w-[84%] xl:-mt-24">
          <div className="bg-card/95 rounded-3xl p-4 shadow-sm border border-porto-border/80 backdrop-blur flex flex-col md:flex-row items-center md:items-center text-center md:text-left relative gap-4 md:p-5 lg:gap-8">
            <div className="relative shrink-0 -mt-10 md:mt-0 flex flex-col items-center gap-2">
              <ProfileAvatar />
              <ProfileStatusAvail />
            </div>

            <ProfileInfo />

            <div className="hidden md:block w-px self-stretch bg-porto-divider" />

            <ProfileAction />
          </div>
        </div>
      </div>
    </section>
  );
};

const Profile = memo(Profile_);
export default Profile;
