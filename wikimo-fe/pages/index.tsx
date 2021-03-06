import { useEffect, useState, useRef, useCallback, FormEvent } from "react";
import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
// Components
import Layout from "../components/templates";
import { Box, Dialog, Button } from "../components/atoms";
import { MovieCard } from "../components/molecules";
// Data
import { connect } from "react-redux";
import { RootState, AppDispatch, getMoviesBySearch } from "../reduxs";
import { ListMovie } from "../services/datatypes";

interface HomeProps {
  omdbkey: string;
  movies: Array<ListMovie>;
  getMoviesBySearch: typeof getMoviesBySearch;
  clearState: () => void;
}

const Home: NextPage<HomeProps> = (props: Partial<HomeProps>) => {
  const { omdbkey, movies, getMoviesBySearch, clearState } = props;

  const [keywords, setKeywords] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [poster, setPoster] = useState<string>("");

  const observer = useRef<HTMLDivElement | IntersectionObserver>();

  const lastElementRef = useCallback((node) => {
      // if (loading) return;

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => {
            return prevPage + 1;
          });
        }
      });

      if (observer.current) observer.current.disconnect();

      if (node) observer.current.observe(node);
  }, [hasMore]);

  useEffect(() => {
    clearState!();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setHasMore(movies!.length > 0);
  }, [movies]);

  useEffect(() => {
    if (hasMore) {
      getMoviesBySearch!(omdbkey!, keywords, page);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (hasMore) {
      clearState!();
      setPage(1);
    }

    getMoviesBySearch!(omdbkey!, keywords, page);
  };

  const handlePoster = (value: string) => {
    setPoster(value);
  };

  return (
    <Layout>
      <Head>
        <title>Wikimo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box as="container" direction="column" className="py-20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <label className="text-2xl text-gray-300 tracking-wide">
                Cari film favorit kamu..
              </label>
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="h-14 px-5 flex-1 rounded-full outline-none border-2 text-gray-900"
                  placeholder="e.g. Batman"
                />

                <Button
                  label="Search"
                  variant="danger"
                  size="lg"
                  buttonProps={{
                    type: "submit",
                  }}
                />
              </div>
            </div>
          </form>
        </Box>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {movies?.map((val: ListMovie, i: number) => {
            if (movies.length === i + 1) {
              return (
                <div key={i.toString()} ref={lastElementRef}>
                  <MovieCard movie={val} doSetPoster={handlePoster} />
                </div>
              );
            }

            return (
              <div key={i.toString()}>
                <MovieCard movie={val} doSetPoster={handlePoster} />
              </div>
            );
          })}
        </div>
      </main>

      {/* <Modal size="sm" open={!!poster} onClose={() => setPoster("")}>
        <div className="relative" style={{ height: 444 }}>
          <Image src={poster} layout="fill" objectFit="cover" alt="" />
        </div>
      </Modal> */}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const omdbkey = process.env.OMDB_API_KEY;

  // Pass data to the page via props
  return { props: { omdbkey } };
};

const mapStateToProps = (state: RootState) => ({
  movies: state.rdcmovies.movies,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getMoviesBySearch: (key: string, keywords: string, page: number) => dispatch(getMoviesBySearch(key, keywords, page)),
  clearState: () => dispatch({ type: "CLEAR_MOVIES" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
