import { MemberCard } from "@/components/MemberCard";
import React from "react";
import {council , members} from "@/data/members"
import { CouncilMemberType,MemberType } from "@/types";

type Props = {};

const Members = (props: Props) => {
  return (
    <>
      <div className="p-20 font-jetbrains">
        <h1 className="text-3xl font-extrabold ">Members</h1>
        <div>
          <h1 className="text-3xl font-extrabold mt-5 ml-5">The Council</h1>
          {/* <CouncilCard /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-1">
            {council.map((member : CouncilMemberType) => (
              <div key={member.id}>
                <MemberCard {...member}/>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold ">The Members</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-1">
            {members.map((member :MemberType) => (
              <div key={member.id}>
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
