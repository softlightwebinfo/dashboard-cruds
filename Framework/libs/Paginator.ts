export class Paginator {
    public static NUM_PLACEHOLDER = '(:num)';
    protected totalItems;
    protected numPages;
    protected itemsPerPage;
    protected currentPage;
    protected urlPattern;
    protected maxPagesToShow = 5;
    protected previousText = 'Atras';
    protected nextText = 'Siguiente';
    protected limit = "0,30";

    /**
     * @param totalItems
     * @param itemsPerPage
     * @param currentPage
     * @param urlPattern
     */
    public constructor(totalItems: any[], itemsPerPage: number, currentPage: number, urlPattern: string = '') {
        this.totalItems = totalItems;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = currentPage;
        this.urlPattern = urlPattern;
        this.updateNumPages();
        this.generarLimit();
    }

    protected generarLimit() {
        if (this.currentPage == 1) {
            this.limit = (0) + "," + this.itemsPerPage;
        } else {
            this.limit = ((this.currentPage - 1) * this.itemsPerPage) + "," + this.itemsPerPage;
        }
    }

    protected updateNumPages() {
        this.numPages = (this.itemsPerPage == 0 ? 0 : Math.ceil(this.totalItems / this.itemsPerPage));
    }

    /**
     * @throws \InvalidArgumentException if $maxPagesToShow is less than 3.
     * @param maxPagesToShow
     */
    public setMaxPagesToShow(maxPagesToShow: number) {
        if (maxPagesToShow < 3) {
            throw new Error('maxPagesToShow cannot be less than 3.');
        }
        this.maxPagesToShow = maxPagesToShow;
    }

    /**
     * @return int
     */
    public getMaxPagesToShow() {
        return this.maxPagesToShow;
    }

    /**
     * @param currentPage
     */
    public setCurrentPage(currentPage: number) {
        this.currentPage = currentPage;
    }

    /**
     * @return int
     */
    public getCurrentPage() {
        return this.currentPage;
    }

    /**
     * @param itemsPerPage
     */
    public setItemsPerPage(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.updateNumPages();
    }

    /**
     * @return int
     */
    public getItemsPerPage() {
        return this.itemsPerPage;
    }

    /**
     * @param totalItems
     */
    public setTotalItems(totalItems) {
        this.totalItems = totalItems;
        this.updateNumPages();
    }

    /**
     * @return int
     */
    public getTotalItems() {
        return this.totalItems;
    }

    /**
     * @return int
     */
    public getNumPages() {
        return this.numPages;
    }

    /**
     * @param urlPattern
     */
    public setUrlPattern(urlPattern) {
        this.urlPattern = urlPattern;
    }

    /**
     * @return string
     */
    public getUrlPattern() {
        return this.urlPattern;
    }

    /**
     * @param int $pageNum
     * @return string
     */
    public getPageUrl(pageNum) {
        return this.urlPattern.replace(Paginator.NUM_PLACEHOLDER, pageNum);
    }

    public getNextPage() {
        if (this.currentPage < this.numPages) {
            return this.currentPage + 1;
        }
        return null;
    }

    public getPrevPage() {
        if (this.currentPage > 1) {
            return this.currentPage - 1;
        }
        return null;
    }

    public getNextUrl() {
        if (!this.getNextPage()) {
            return null;
        }
        return this.getPageUrl(this.getNextPage());
    }

    /**
     * @return string|null
     */
    public getPrevUrl() {
        if (!this.getPrevPage()) {
            return null;
        }
        return this.getPageUrl(this.getPrevPage());
    }

    /**
     * Get an array of paginated page data.
     *
     * Example:
     * array(
     *     array ('num' => 1,     'url' => '/example/page/1',  'isCurrent' => false),
     *     array ('num' => '...', 'url' => NULL,               'isCurrent' => false),
     *     array ('num' => 3,     'url' => '/example/page/3',  'isCurrent' => false),
     *     array ('num' => 4,     'url' => '/example/page/4',  'isCurrent' => true ),
     *     array ('num' => 5,     'url' => '/example/page/5',  'isCurrent' => false),
     *     array ('num' => '...', 'url' => NULL,               'isCurrent' => false),
     *     array ('num' => 10,    'url' => '/example/page/10', 'isCurrent' => false),
     * )
     *
     * @return array
     */
    public getPages() {
        let pages: any = [];
        if (this.numPages <= 1) {
            return [];
        }
        if (this.numPages <= this.maxPagesToShow) {
            for (let i = 1; i <= this.numPages; i++) {
                pages.push(this.createPage(i, i == this.currentPage));
            }
        } else {
            let slidingStart;
            // Determine the sliding range, centered around the current page.
            let numAdjacents = Math.floor((this.maxPagesToShow - 3) / 2);
            if (this.currentPage + numAdjacents > this.numPages) {
                slidingStart = this.numPages - this.maxPagesToShow + 2;
            } else {
                slidingStart = this.currentPage - numAdjacents;
            }
            if (slidingStart < 2) slidingStart = 2;
            let slidingEnd = slidingStart + this.maxPagesToShow - 3;
            if (slidingEnd >= this.numPages) slidingEnd = this.numPages - 1;
            // Build the list of pages.
            pages.push(this.createPage(1, this.currentPage == 1));
            if (slidingStart > 2) {
                pages.push(this.createPageEllipsis());
            }
            for (let i = slidingStart; i <= slidingEnd; i++) {
                pages.push(this.createPage(i, i == this.currentPage));
            }
            if (slidingEnd < this.numPages - 1) {
                pages.push(this.createPageEllipsis());
            }
            pages.push(this.createPage(this.numPages, this.currentPage == this.numPages));
        }
        return pages;
    }

    /**
     * Create a page data structure.
     *
     * @return Array
     * @param pageNum
     * @param isCurrent
     */
    protected createPage(pageNum: number, isCurrent: boolean = false) {
        return {
            num: pageNum,
            url: this.getPageUrl(pageNum),
            isCurrent
        }
    }

    /**
     * @return array
     */
    protected createPageEllipsis() {
        return {
            num: "...",
            url: null,
            isCurrent: false,
        }
    }

    public isPaginating() {
        return !(this.numPages <= 1);
    }

    /**
     * Render an HTML pagination control.
     *
     * @return string
     */
    public toHtml() {
        // if (this.numPages <= 1) {
        //     return null;
        // }
        // const data = [];
        // $html = '<ul class="Pagination">';
        // if (this.getPrevUrl()) {
        //     $html. = '<li><a class="Pagination__item--prev" href="'.this.getPrevUrl().
        //     '">&laquo; '.this.previousText.
        //     '</a></li>';
        // }
        // foreach(this.getPages() as $page)
        // {
        //     if ($page['url']) {
        //         $html. = '<li><a '.($page['isCurrent'] ? ' class="Pagination__item--active"' : 'class="Pagination__item"').
        //         ' href="'.$page['url'].
        //         '">'.$page['num'].
        //         '</a></li>';
        //     } else {
        //         $html. = '<li class="disabled Pagination__item--disabled"><span>'.$page['num'].
        //         '</span></li>';
        //     }
        // }
        // if (this.getNextUrl()) {
        //     $html. = '<li><a class="Pagination__item--next" href="'.this.getNextUrl().
        //     '">'.this.nextText.
        //     ' &raquo;</a></li>';
        // }
        // $html. = '</ul>';
        // return $html;
    }

    public toString() {
        return this.toHtml();
    }

    public getCurrentPageFirstItem() {
        let first = (this.currentPage - 1) * this.itemsPerPage + 1;
        if (first > this.totalItems) {
            return null;
        }
        return first;
    }

    public getCurrentPageLastItem() {
        let first = this.getCurrentPageFirstItem();
        if (first === null) {
            return null;
        }
        let last = first + this.itemsPerPage - 1;
        if (last > this.totalItems) {
            return this.totalItems;
        }
        return last;
    }

    public setPreviousText(text) {
        this.previousText = text;
        return this;
    }

    public setNextText(text) {
        this.nextText = text;
        return this;
    }

    /**
     * @return string
     */
    public getLimit() {
        return this.limit;
    }

    /**
     * @param limit
     */
    public setLimit(limit) {
        this.limit = limit;
    }

    public getPrevText() {
        return this.previousText;
    }

    public getNextText() {
        return this.nextText;
    }
}