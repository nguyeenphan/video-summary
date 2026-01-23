import qs from "qs";
import type { TStrapiResponse, THomePage, TGlobal, TMetaData } from "@/types";

import { api } from "@/data/data-api";
import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

async function getHomePageData(): Promise<TStrapiResponse<THomePage>> {
  const query = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              link: {
                populate: true,
              },
            },
          },
          "layout.features-section": {
            populate: {
              features: {
                populate: true,
              },
            },
          },
        },
      },
    },
  });

  const url = new URL("/api/home-page", baseUrl);
  url.search = query;
  return api.get<THomePage>(url.href);
}

async function getGlobalPageData() {
    const url = new URL("/api/global", baseUrl);

    url.search = qs.stringify({
        populate: [
            "header.logoText",
            "header.ctaButton",
            "footer.logoText",
            "footer.socialLink",
        ],
    })

    return api.get<TGlobal>(url.href);
}

async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"]
  })

  return api.get<TMetaData>(url.href);
}

export const loaders = {
  getHomePageData,
  getGlobalPageData,
  getGlobalPageMetadata,
};