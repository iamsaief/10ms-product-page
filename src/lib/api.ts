import { ApiResponse } from "./types";

/**
 * Fetches course data from the 10minuteschool API with proper error handling
 * @param lang - Language preference (en/bn)
 * @returns Promise<ApiResponse>
 */
export async function getCourseData(lang = "en"): Promise<ApiResponse> {
  const apiUrl = `https://_api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`;

  console.log("Fetching from URL:", apiUrl); // Debug log

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        "Content-Type": "application/json",
      },
      // Disable caching for development to get fresh data
      cache: "no-store",
    });

    console.log("Response status:", response.status); // Debug log

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Raw API Response:", JSON.stringify(data, null, 2)); // Debug log

    // Check if we have the expected data structure (real API uses 'code' instead of 'success')
    if (data && data.code === 200 && data.data) {
      console.log("Real API data found, returning:", data);
      return data;
    } else {
      console.log("Unexpected API structure, using fallback");
      throw new Error("Unexpected API response structure");
    }
  } catch (error) {
    console.error("API Error:", error);
    console.log("Using fallback mock data");

    // Simulate network delay for realistic loading experience
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return mock data that matches the real API structure
    return {
      code: 200,
      data: {
        slug: "ielts-course",
        id: 153,
        title: "IELTS Course by Munzereen Shahid",
        description: `<p class="tenms__paragraph" dir="ltr"><span style="white-space: pre-wrap;">Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the country.</span></p>`,
        platform: "skills",
        type: "regular",
        modality: "recorded",
        old_info: {},
        start_at: "",
        media: [
          {
            name: "preview_gallery",
            resource_type: "video",
            resource_value: "zrlYnaZftEQ",
            thumbnail_url: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
          },
          {
            name: "thumbnail",
            resource_type: "image",
            resource_value: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
          },
        ],
        checklist: [
          {
            id: "meta1",
            text: "Total Enrolled 32995",
            icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png",
            color: "black",
            list_page_visibility: true,
          },
          {
            id: "meta2",
            text: "54 Videos",
            icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png",
            color: "black",
            list_page_visibility: true,
          },
          {
            id: "meta3",
            text: "10 Reading & 10 Listening Mocktests",
            icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png",
            color: "black",
            list_page_visibility: false,
          },
          {
            id: "meta4",
            text: "38 Lecture Sheets",
            icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png",
            color: "black",
            list_page_visibility: false,
          },
          {
            id: "meta5",
            text: "Course Validity Lifetime",
            icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png",
            color: "black",
            list_page_visibility: false,
          },
        ],
        seo: [],
        cta_text: {
          name: "Enroll",
          value: "enroll",
        },
        sections: [
          {
            type: "instructors",
            name: "Course instructor",
            description: "",
            bg_color: "",
            order_idx: 2,
            values: [
              {
                name: "Munzereen Shahid",
                short_description: "Course Instructor",
                description:
                  "<p>MSc (English), University of Oxford (UK);<br>BA, MA (English), University of Dhaka;<br>IELTS: 8.5</p>",
                image: "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg",
                slug: "munzereen-shahid",
                has_instructor_page: true,
              },
            ],
          },
          {
            type: "features",
            name: "How the course is laid out",
            description: "",
            bg_color: "",
            order_idx: 3,
            values: [
              {
                title: "৫০+ ভিডিও লেকচার",
                subtitle: "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা",
                icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png",
              },
              {
                title: "৩৮টি লেকচার শিট",
                subtitle:
                  "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
                icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png",
              },
              {
                title: "রিডিং এন্ড লিসিনিং মক টেস্ট",
                subtitle: "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
                icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png",
              },
              {
                title: "ডাউট সল্ভিং লাইভ ক্লাস",
                subtitle: "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
                icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png",
              },
            ],
          },
          {
            type: "pointers",
            name: "What you will learn by doing the course",
            description: "",
            bg_color: "",
            order_idx: 5,
            values: [
              {
                text: "Detailed rules and regulations of each module of the IELTS test",
                color: "black",
                icon: "0",
              },
              {
                text: "Formats and strategies to ace the IELTS test",
                color: "black",
                icon: "0",
              },
              {
                text: "Proper structure and essay type for scoring well in IELTS writing task 1 and 2",
                color: "black",
                icon: "0",
              },
              {
                text: "Speaking accurately on any topic in the IELTS speaking test",
                color: "black",
                icon: "0",
              },
              {
                text: "Time management strategy to get a good band score in the IELTS test",
                color: "black",
                icon: "0",
              },
              {
                text: "Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.",
                color: "black",
                icon: "0",
              },
            ],
          },
          {
            type: "feature_explanations",
            name: "Course Exclusive Feature",
            description: "",
            bg_color: "",
            order_idx: 8,
            values: [
              {
                title: "ভিডিও লেকচার",
                checklist: [
                  "IELTS Academic ও General Training নিয়ে আলোচনা",
                  "Reading, Writing, Listening ও Speaking এর Overview & Format",
                  "প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি",
                  "ভিডিওর সাথে প্র্যাকটিসের সুযোগ",
                ],
                file_type: "image",
                file_url: "https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png",
              },
              {
                title: "Reading ও Listening Mock Tests",
                checklist: [
                  "10 Reading & 10 Listening Mock Tests",
                  "Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স",
                  "উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট",
                  "যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট",
                ],
                file_type: "image",
                file_url: "https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png",
              },
            ],
          },
          {
            type: "about",
            name: "Course details",
            description: "",
            bg_color: "",
            order_idx: 7,
            values: [
              {
                title: "<h2><b>This IELTS course is for</b></h2>",
                description:
                  "<li>Those who aim to go abroad for work or higher education</li>\n<li>Those who want to apply for permanent residency abroad</li>\n<li>Those who have appeared for the IELTS exam but are not satisfied with their band score</li>\n<li>Those who want to improve their reading, writing, listening, and speaking skills through IELTS for work, business, or personal interest</li>",
              },
              {
                title: "<h2><b>About the IELTS course</b></h2>",
                description:
                  '<p>IELTS certificates are accepted in different higher education institutions in the USA and other English-speaking countries across the globe. This exam tests the ability of the candidates to speak, read, listen and write in English.</p><br>\n\n<p>Many of us are intimidated by English grammar as English is not our first language. Fortunately, IELTS is essentially a language-based test and not grammar-based. To achieve the desired score, you will require four English language skills: reading, writing, listening and speaking. The more proficient a person is in these four areas, the higher their score will be on the IELTS test.</p><br>\n\n<p>To help IELTS examinees improve these four essential English language skills, 10 Minute School has brought a detailed and well-guided <a href="https://10minuteschool.com/ielts" style="color:blue;">IELTS preparation</a> course. The instructor of this course is Munzereen Shahid (IELTS Band Score 8.5/9), who has recently graduated from the English Department of the world-renowned Oxford University in England.</p><br>\n\n\n<p>If you enroll in our course, you will receive the book "ঘরে বসে IELTS প্রস্তুতি" by Munzereen Shahid, completely free! Along with the video lectures in the course, you can learn strategies from the book and practice to fully prepare for the IELTS exam. This course also includes IELTS Reading and Listening Mock Tests, which will give you a real exam experience and an understanding of band scores. During practice sessions, expert instructors are available in live classes to solve any problems you may encounter. Therefore, now you can have complete IELTS preparation in one course!</p><br>\n<p>To make your IELTS test preparation effortless, efficient, and practical, enroll in "IELTS Course by Munzereen Shahid" today and take yourself one step closer to fulfilling your dreams!</p>',
              },
            ],
          },
        ],
        is_cohort_based_course: false,
        secondary_cta_group: [],
        delivery_method: "pathao",
      },
      error: [],
      message: "Success",
      payload: [],
      status_code: 200,
    };
  }
}
