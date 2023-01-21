const Skeleton = () => {
  return (
    <>
      <div className="card animate">
        <div className="skeletonContent-1" key="skeletonContent-1" />
        <div className="skeletonContent-2" key="skeletonContent-2" />
        <div className="skeletonContent-3" key="skeletonContent-3" />
      </div>
    </>
  );
};

export default Skeleton;
