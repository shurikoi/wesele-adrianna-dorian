// import { Dropbox } from "dropbox";

// export const dbxUploadFiles = async (file: File) => {
//     const UPLOAD_FILE_SIZE_LIMIT = 150 * 1024 * 1024;
//     const ACCESS_TOKEN = process.env.NEXT_PUBLIC_DBX_ACCESS_TOKEN;
//     console.log('ACCESS_TOKEN', ACCESS_TOKEN);
//     if (!ACCESS_TOKEN) {
//         console.error('Dropbox access token is not defined.');
//         return;
//     }
//     const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

//     if (file.size < UPLOAD_FILE_SIZE_LIMIT) {
//         dbx.filesUpload({ path: '/' + file.name, contents: file })
//             .then((response) => {
//                 console.log(response);
//             })
//             .catch(function (error) {
//                 console.error(error.error || error);
//             });
//     } else {
//         console.log('File is too large. Please upload a file smaller than 150 MB.');
//     }
// };