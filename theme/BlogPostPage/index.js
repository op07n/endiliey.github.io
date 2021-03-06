/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Layout from '@theme/Layout'; // eslint-disable-line
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';

function BlogPostPage(props) {
  const {content: BlogPostContents, metadata, nextItem, prevItem} = props;
  const {frontMatter} = BlogPostContents;
  return (
    <Layout title={metadata.title} description={metadata.description}>
      {BlogPostContents && (
        <div className="container margin-vert--sm">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <BlogPostItem frontMatter={frontMatter} metadata={metadata}>
                <BlogPostContents />
              </BlogPostItem>
              <div className="margin-vert--xl">
                <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
