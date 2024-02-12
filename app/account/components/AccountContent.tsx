"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";

import useClickMeModal from "@/hooks/useClickMeModal";

const AccountContent = () => {
  const router = useRouter();
  const { isLoading, subscription, user } = useUser();

  const [loading, setLoading] = useState(false);

  const clickMeModal = useClickMeModal();

  
  

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);


  const onClick = () => {
    

    
    return clickMeModal.onOpen();
  }

  return ( 
    <div className="mb-7 px-6">
      {!subscription && (
        <div className="flex flex-col gap-y-4">
        <p>You are logged in to your account</p>
        <Button 
          onClick={onClick}
          className="w-[300px]"
        >
          Click Me
        </Button>
      </div>
      )}
      
    </div>
  );
}
 
export default AccountContent;