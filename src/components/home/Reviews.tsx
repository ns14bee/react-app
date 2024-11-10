import React, { useEffect, useState } from "react";
import Profile from "../common/Profile";
import useApi from "../../hooks/useAPI";
import { API_ENDPOINTS } from "../../utils/enum";
import { TReviewData } from "./home.types";

const Reviews = () => {
  const [profile, setProfile] = useState<TReviewData | null>(null);
  const {
    data: ReviewData,
    isLoading,
    error,
  } = useApi<{ reviews: TReviewData[] }>(API_ENDPOINTS.CUSTOMER_REVIEWS, {
    method: "GET",
  });
  console.log(ReviewData);
  useEffect(() => {
    if (!profile && ReviewData?.reviews && ReviewData?.reviews?.length > 0) {
      setProfile(ReviewData.reviews?.[0]);
      console.log(ReviewData);
    }
  }, [ReviewData, profile]);

  const handleSetProfile = (profile: TReviewData) => {
    setProfile(profile);
  };

  return (
    <div className="flex flex-col py-[48px] gap-12">
      <div className="text-4xl font-semibold">
        What customers think about our product:
      </div>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <>
          {error ? (
            "Error loaidng data"
          ) : (
            <div className="flex items-start gap-24 justify-between">
              {ReviewData?.reviews && ReviewData?.reviews?.length > 0 && (
                <>
                  <div className="flex flex-col gap-12">
                    {ReviewData?.reviews?.slice(0, 4)?.map((review) => (
                      <Profile
                        key={review.id}
                        isActive={review.id === profile?.id}
                        handleSetProfile={handleSetProfile}
                        data={review}
                      />
                    ))}
                  </div>
                  <div className="flex py-24 text-5xl font-semibold self-center">
                    {profile?.comment}
                  </div>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Reviews;
