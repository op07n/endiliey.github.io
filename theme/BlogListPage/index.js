/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Layout from '@theme/Layout'; // eslint-disable-line
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';

function BlogListPage(props) {
  const {metadata, items} = props;

  return (
    <Layout
      isBlogListPage={true}
      title="op07n"
      description="op07n personal blog">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            {items.map(
              ({content: BlogPostContent, metadata: blogPostMetadata}) => (
                <div
                  className="margin-bottom--lg"
                  key={blogPostMetadata.permalink}>
                  <BlogPostItem
                    frontMatter={BlogPostContent.frontMatter}
                    metadata={blogPostMetadata}
                    truncated>
                    <BlogPostContent />
                  </BlogPostItem>
                </div>
              ),
            )}
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;
