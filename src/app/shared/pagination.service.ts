import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';


@Injectable()
export class PaginationService {

  getPager(totalItems: number, currentPage: number = 1) {
    const pageSize = environment.pageSize;
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const arr = [];
    for (let counter = startPage; counter < endPage; counter++) {
      arr[counter - 1] = counter;
    }

    const pages = arr;
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
      };
  }
}
