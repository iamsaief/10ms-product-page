"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getCourseData } from "@/lib/api";
import { Data } from "@/lib/types";

interface PageProps {
  searchParams: { lang?: string };
}

/**
 * Main client page component with proper loading states and skeleton
 */
export default function ClientPage({ searchParams }: PageProps) {
  const [courseData, setCourseData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lang = searchParams.lang || "en";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        console.log("Starting data fetch..."); // Debug log

        const response = await getCourseData(lang);

        console.log("Data fetch completed:", response); // Debug log

        if (response && response.data) {
          setCourseData(response.data);
        } else {
          throw new Error("No data received from API");
        }
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError(err instanceof Error ? err.message : "Failed to load course data");
      } finally {
        // Add minimum loading time to prevent flash
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }

    fetchData();
  }, [lang]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora rerum quisquam libero iusto eaque consectetur
        voluptate, quas nihil deleniti iste, aut optio placeat soluta? Corporis iure odio ullam officia deleniti quidem
        consectetur eius molestias velit? Consequatur, et iusto. Modi, autem eum! Explicabo, reprehenderit perspiciatis
        ipsum a quis quidem eum eveniet. Doloremque eaque ab consequatur nisi. Voluptatibus iusto error sit molestias
        voluptatum molestiae tenetur ducimus pariatur iste exercitationem, totam, rerum in aut. Facere sit natus nisi.
        Voluptatibus possimus accusamus veniam quaerat adipisci nulla quasi quibusdam explicabo velit dolorum sequi
        ipsam laboriosam expedita nihil quas facilis fuga quos voluptates, mollitia quis delectus! Similique in
        aspernatur optio labore quos ex fugiat commodi temporibus, ut modi eaque repudiandae! Beatae exercitationem
        accusantium neque sequi aspernatur, nostrum soluta odit, sit harum suscipit a esse illo sint perferendis
        distinctio natus repellat quos quia velit blanditiis amet temporibus eos aliquid eligendi. Deserunt, tenetur
        voluptate quos fugit illo iusto esse officiis voluptas necessitatibus fuga repellendus nulla quasi fugiat
        deleniti consectetur praesentium? Tempore beatae necessitatibus sequi laboriosam officia nisi numquam, dolore
        praesentium. Animi, veritatis tempora, eveniet, sed enim odit dignissimos quae illum vitae incidunt voluptatem.
        Voluptatibus sit molestiae quos eius, aliquam laboriosam placeat dignissimos assumenda dolores? Odio sint,
        ratione saepe sapiente veniam natus iusto molestiae fuga nam accusantium! Ipsam sunt earum necessitatibus
        dignissimos error, vel minus libero corporis molestiae suscipit, delectus tempora quis asperiores quo placeat
        reprehenderit iste reiciendis repudiandae inventore, saepe dicta esse! Ratione maxime quis quod voluptates
        deserunt eius, vitae neque incidunt accusantium officiis tenetur error labore impedit expedita ipsa tempora,
        nihil veritatis omnis reiciendis? Tenetur temporibus ad dolorem voluptatem iusto accusamus ab animi, hic
        doloremque laboriosam, earum eaque aliquam illo enim quisquam sint deleniti cupiditate porro quae adipisci
        quaerat! Reprehenderit veniam quae accusamus nobis odit vel excepturi porro perspiciatis doloribus neque.
        Consectetur quasi perspiciatis neque esse sapiente quo nihil voluptatibus. Distinctio fuga ab quo sunt voluptas
        iste nam beatae odit explicabo obcaecati consequuntur aperiam sint adipisci quos dolorum blanditiis, minus
        maiores consequatur quis error. Tempora sint molestias voluptatum sit architecto distinctio quibusdam
        voluptatibus cum eveniet, animi ab quae eligendi eum facere nemo ipsam exercitationem ad placeat eos at
        perspiciatis fugit nihil. Officia autem delectus veritatis! Voluptates, adipisci eos voluptatibus fuga, atque
        sapiente at voluptatem sunt vero necessitatibus, ea nihil incidunt expedita. Soluta delectus possimus obcaecati,
        quas molestiae voluptas voluptatum ipsa officia vitae quos, a ex unde perspiciatis iusto. Voluptatem blanditiis
        culpa consectetur, ratione, ea, non esse provident a error ullam veritatis libero aperiam. Beatae commodi,
        voluptas assumenda, at tempore iste optio maxime minima quod, nemo earum. Repellat quibusdam ea tempora
        doloremque eveniet magni asperiores aperiam! Quaerat blanditiis ad neque mollitia voluptates tenetur asperiores.
        Totam laudantium quasi dolor esse sapiente voluptatibus perspiciatis asperiores sed praesentium quidem atque
        vitae eaque, debitis alias eligendi laborum perferendis magnam culpa excepturi repellendus mollitia quae?
        Voluptatum illum, blanditiis officia ut minus, magni tempore ad sed quo quia, sit voluptas minima ipsam. Porro
        nemo illum, soluta dolore similique at. At, quam a? Voluptas modi magni eveniet, consequatur suscipit porro
        officiis optio a minus aspernatur?
      </div>
      <Footer />
    </div>
  );
}
