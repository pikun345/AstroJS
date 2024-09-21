
import {gql} from "../../../node_modules/@apollo/client/index"



    export const GET_DATA = gql `query Posts {
    posts{
      nodes {
        id
    title
    slug
    date
    uri
    excerpt
    commentStatus
    categories {
      nodes {
        id
        name
        uri
        slug
      }
    }
    tags {
      nodes {
        id
        name
        uri
        slug
        count
      }
    }
    author {
      node {
        id
        name
        firstName
        lastName
        uri
        avatar {
          url
        }
        seo {
          title
          description
          canonicalUrl
          focusKeywords
        }
      }
    }
    content(format: RENDERED)
    nextPost {
      uri
      title
    }
    previousPost {
      uri
      title
    }
    featuredImage {
      node {
        altText
        sourceUrl
        srcSet
        mediaItemUrl
        mediaDetails {
          sizes {
            name
            sourceUrl
            width
            height
            mimeType
          }
        }
      }
    }
    seo {
      title
      description
      canonicalUrl
      focusKeywords
      openGraph {
        url
        title
        siteName
        description
        image {
          secureUrl
          url
          width
          type
          height
        }
        locale
        type
      }
      jsonLd {
        raw
      }
    }

      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

